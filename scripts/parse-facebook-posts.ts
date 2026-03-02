import fs from 'fs';
import path from 'path';

interface FacebookPost {
  timestamp: number;
  attachments?: any[];
  data?: any[];
  title?: string;
}

interface ParsedPost {
  id: string;
  timestamp: number;
  date: string;
  title?: string;
  content?: string;
  attachments: {
    events?: any[];
    externalLinks?: string[];
    media?: any[];
  };
  postType: 'text' | 'event' | 'link' | 'media' | 'mixed';
  hasContent: boolean;
  hasAttachments: boolean;
}

// Function to parse Facebook posts from JSON
function parseFacebookPosts(): ParsedPost[] {
  const facebookDataPath = path.join(process.cwd(), 'public/this_profile\'s_activity_across_facebook/posts/profile_posts_1.json');
  const facebookPosts: FacebookPost[] = JSON.parse(fs.readFileSync(facebookDataPath, 'utf-8'));

  return facebookPosts.map((post, index) => {
    // Extract text content
    const contentItem = post.data?.find((item: any) => item.post && item.post.trim().length > 0);
    const content = contentItem?.post?.trim();

    // Extract attachments
    const attachments = {
      events: [] as any[],
      externalLinks: [] as string[],
      media: [] as any[]
    };

    if (post.attachments && post.attachments.length > 0) {
      post.attachments.forEach(attachment => {
        if (attachment.data && attachment.data.length > 0) {
          attachment.data.forEach((dataItem: any) => {
            if (dataItem.event) {
              attachments.events.push(dataItem.event);
            }
            if (dataItem.external_context && dataItem.external_context.url) {
              attachments.externalLinks.push(dataItem.external_context.url);
            }
            if (dataItem.media) {
              attachments.media.push(dataItem.media);
            }
          });
        }
      });
    }

    // Determine post type
    let postType: 'text' | 'event' | 'link' | 'media' | 'mixed' = 'text';
    if (attachments.events.length > 0) postType = 'event';
    else if (attachments.externalLinks.length > 0) postType = 'link';
    else if (attachments.media.length > 0) postType = 'media';
    else if (content) postType = 'text';
    else postType = 'mixed';

    return {
      id: `fb-post-${post.timestamp}-${index}`,
      timestamp: post.timestamp,
      date: new Date(post.timestamp * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      title: post.title,
      content: content || undefined,
      attachments,
      postType,
      hasContent: !!content,
      hasAttachments: attachments.events.length > 0 || attachments.externalLinks.length > 0 || attachments.media.length > 0
    };
  });
}

// Main execution
function displayParsedPosts() {
  const parsedPosts = parseFacebookPosts();

  console.log('=== PARSED FACEBOOK POSTS ===');
  console.log(`Total posts: ${parsedPosts.length}`);

  // Statistics
  const stats = {
    withContent: parsedPosts.filter(p => p.hasContent).length,
    withAttachments: parsedPosts.filter(p => p.hasAttachments).length,
    events: parsedPosts.filter(p => p.postType === 'event').length,
    links: parsedPosts.filter(p => p.postType === 'link').length,
    media: parsedPosts.filter(p => p.postType === 'media').length,
    text: parsedPosts.filter(p => p.postType === 'text').length
  };

  console.log('\n=== STATISTICS ===');
  console.log(`Posts with text content: ${stats.withContent}`);
  console.log(`Posts with attachments: ${stats.withAttachments}`);
  console.log(`Event posts: ${stats.events}`);
  console.log(`Link posts: ${stats.links}`);
  console.log(`Media posts: ${stats.media}`);
  console.log(`Text posts: ${stats.text}`);

  // Display sample posts
  console.log('\n=== SAMPLE POSTS ===');
  const samplePosts = parsedPosts.slice(0, 10);

  samplePosts.forEach((post, i) => {
    console.log(`\n--- Post ${i + 1} ---`);
    console.log(`ID: ${post.id}`);
    console.log(`Date: ${post.date}`);
    console.log(`Type: ${post.postType}`);
    console.log(`Title: ${post.title || 'No title'}`);

    if (post.content) {
      console.log(`Content: ${post.content.substring(0, 150)}${post.content.length > 150 ? '...' : ''}`);
    }

    if (post.attachments.events.length > 0) {
      console.log(`Events: ${post.attachments.events.length}`);
      post.attachments.events.forEach(event => {
        console.log(`  - ${event.name}`);
      });
    }

    if (post.attachments.externalLinks.length > 0) {
      console.log(`External Links: ${post.attachments.externalLinks.length}`);
      post.attachments.externalLinks.forEach(link => {
        console.log(`  - ${link}`);
      });
    }

    if (post.attachments.media.length > 0) {
      console.log(`Media Files: ${post.attachments.media.length}`);
      post.attachments.media.forEach(media => {
        console.log(`  - ${media.uri || 'Unknown'}`);
      });
    }
  });

  return parsedPosts;
}

// Export for use
export { parseFacebookPosts, displayParsedPosts, type ParsedPost };

// Run if executed directly
if (require.main === module) {
  displayParsedPosts();
}

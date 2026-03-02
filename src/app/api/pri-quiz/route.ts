import { NextRequest, NextResponse } from 'next/server';
import { EmailSubmissionData } from '../../../self-typing/types';

export async function POST(request: NextRequest) {
  try {
    const body: EmailSubmissionData = await request.json();

    // Validate required fields
    if (!body.email || !body.responses || body.derivedType === null) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission (placeholder for CRM integration)
    console.log('PRI Quiz Submission:', {
      email: body.email,
      responses: body.responses,
      derivedType: body.derivedType,
      timestamp: new Date().toISOString(),
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send to CRM (HubSpot, etc.)
    // 3. Trigger email sequence
    // 4. Add to mailing list

    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Results saved successfully',
      derivedType: body.derivedType,
    });

  } catch (error) {
    console.error('Error processing PRI quiz submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

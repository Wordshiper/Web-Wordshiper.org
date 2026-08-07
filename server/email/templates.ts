export interface NewsletterNotificationData {
  email: string;
}

export interface VolunteerNotificationData {
  name: string;
  email: string;
  phone?: string;
  interests: string[];
  message?: string;
}

export function createNewsletterNotification(data: NewsletterNotificationData) {
  const subject = '새 뉴스레터 구독자 알림 / New Newsletter Subscriber';
  
  const text = `
새로운 뉴스레터 구독자가 등록되었습니다.
이메일: ${data.email}

---

A new newsletter subscriber has registered.
Email: ${data.email}
  `.trim();

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2563eb;">📬 새 뉴스레터 구독자 / New Newsletter Subscriber</h2>
      
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 10px 0;"><strong>이메일 / Email:</strong></p>
        <p style="margin: 10px 0; color: #1f2937;">${data.email}</p>
      </div>
      
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
      
      <p style="color: #6b7280; font-size: 14px;">
        이 알림은 Wordshiper 뉴스레터 구독 시스템에서 자동으로 발송되었습니다.<br>
        This notification was sent automatically from the Wordshiper newsletter subscription system.
      </p>
    </div>
  `;

  return { subject, text, html };
}

export function createVolunteerNotification(data: VolunteerNotificationData) {
  const subject = '새 자원봉사자 신청 알림 / New Volunteer Application';
  
  const interestsText = data.interests.length > 0 
    ? data.interests.join(', ') 
    : '없음 / None';
  
  const text = `
새로운 자원봉사자가 신청했습니다.

이름: ${data.name}
이메일: ${data.email}
전화번호: ${data.phone || '제공되지 않음 / Not provided'}
관심 분야: ${interestsText}
메시지: ${data.message || '없음 / None'}

---

A new volunteer has applied.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Interests: ${interestsText}
Message: ${data.message || 'None'}
  `.trim();

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #2563eb;">🙏 새 자원봉사자 신청 / New Volunteer Application</h2>
      
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 10px 0;"><strong>이름 / Name:</strong></p>
        <p style="margin: 10px 0; color: #1f2937;">${data.name}</p>
        
        <p style="margin: 10px 0;"><strong>이메일 / Email:</strong></p>
        <p style="margin: 10px 0; color: #1f2937;">${data.email}</p>
        
        <p style="margin: 10px 0;"><strong>전화번호 / Phone:</strong></p>
        <p style="margin: 10px 0; color: #1f2937;">${data.phone || '제공되지 않음 / Not provided'}</p>
        
        <p style="margin: 10px 0;"><strong>관심 분야 / Interests:</strong></p>
        <p style="margin: 10px 0; color: #1f2937;">${interestsText}</p>
        
        ${data.message ? `
          <p style="margin: 10px 0;"><strong>메시지 / Message:</strong></p>
          <p style="margin: 10px 0; color: #1f2937; white-space: pre-wrap;">${data.message}</p>
        ` : ''}
      </div>
      
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
      
      <p style="color: #6b7280; font-size: 14px;">
        이 알림은 Wordshiper 자원봉사자 등록 시스템에서 자동으로 발송되었습니다.<br>
        This notification was sent automatically from the Wordshiper volunteer registration system.
      </p>
    </div>
  `;

  return { subject, text, html };
}

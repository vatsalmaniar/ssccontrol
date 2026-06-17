'use client';

import { useEnquiry } from '@/components/EnquiryModal';

export default function EnquireButton({ subject, className, children }) {
  const { open } = useEnquiry();
  return (
    <button type="button" className={className} onClick={() => open(subject)}>
      {children}
    </button>
  );
}

import { noticeData } from '@/data/homeData';

interface NoticeListProps {
  notices?: { id: number; title: string; date: string; }[];
}

export function NoticeList({ notices = noticeData }: NoticeListProps = {}) {
  return (
    <div className="px-4 mb-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">공지사항</h2>
      
      <div className="space-y-3">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
          >
            <span className="text-sm text-foreground font-medium">
              {notice.title}
            </span>
            <span className="text-xs text-muted-foreground">
              {notice.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
import { ScheduleItem } from '@/data/managementData';

interface RequestScheduleProps {
  schedules: ScheduleItem[];
}

export function RequestSchedule({ schedules }: RequestScheduleProps) {
  return (
    <div className="bg-white p-4">
      <h3 className="text-lg font-medium text-foreground mb-4">계약일정 정보 (일정표)</h3>
      <p className="text-sm text-muted-foreground mb-6">
        좌우로 스와이프 하시면 내용을 보실 수 있습니다.
      </p>

      <div className="bg-gray-50 rounded-lg overflow-hidden">
        {/* 테이블 헤더 */}
        <div className="flex bg-gray-100 text-sm font-medium text-muted-foreground">
          <div className="w-16 p-3 text-center border-r border-gray-200">No</div>
          <div className="flex-1 p-3">제목</div>
        </div>

        {/* 테이블 내용 */}
        <div className="divide-y divide-gray-200">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="flex text-sm">
              <div className="w-16 p-3 text-center text-muted-foreground border-r border-gray-200">
                {schedule.id}
              </div>
              <div className="flex-1 p-3 text-foreground">
                {schedule.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
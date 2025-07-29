import { requestStatusData } from '@/data/homeData';

export function RequestStatusGrid() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">요청 현황</h2>
        <span className="text-2xl font-bold text-primary">7</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {requestStatusData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl">{item.icon}</div>
              <span className="text-sm text-muted-foreground">{item.title}</span>
              <span className={`text-xl font-bold ${item.color}`}>
                {item.count}건
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
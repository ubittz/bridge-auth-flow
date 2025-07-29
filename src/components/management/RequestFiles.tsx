import { FileItem } from '@/data/managementData';

interface RequestFilesProps {
  files: FileItem[];
}

export function RequestFiles({ files }: RequestFilesProps) {
  return (
    <div className="bg-white p-4">
      <h3 className="text-lg font-medium text-foreground mb-4">공유함</h3>
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
          {files.map((file) => (
            <div key={file.id} className="flex text-sm">
              <div className="w-16 p-3 text-center text-muted-foreground border-r border-gray-200">
                {file.id}
              </div>
              <div className="flex-1 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">{file.title}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    file.type === '파일' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {file.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
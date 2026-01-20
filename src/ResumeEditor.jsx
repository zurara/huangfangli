import React, { useState } from 'react';
import { Phone, Mail, Download, Edit3, Check, FileText } from 'lucide-react';

export default function ResumeEditor() {
  const [isEditing, setIsEditing] = useState(false);
  
  const [resume, setResume] = useState({
    name: '黃芳禮',
    phone: '0912-345-678',
    email: 'example@email.com',
    education: [
      '高工製圖科畢業（半工半讀）',
      '2007–2009　彰化建國科技大學　工業工程與管理系（在職進修）'
    ],
    experiences: [
      {
        period: '2010–2024',
        company: '全興公司中國南京總部',
        title: '人資總務部長',
        description: '人資制度規劃、行政總務及員工服務；赴杭州生產基地推展新能源配套人力及後勤；執行抗疫情支援措施，配合政府政策維護公司形象'
      },
      {
        period: '2005–2009',
        company: '健生公司',
        title: '企劃 / 股長',
        description: '部門行政與企劃管理；全拓公司舊址翻新專案；赴印尼協助產線 Layout，配合新機種批量生產'
      },
      {
        period: '1996–2004',
        company: '保險服務業',
        title: '業務襄理',
        description: '客戶服務與業務管理，九年內晉升襄理'
      },
      {
        period: '1986–1995',
        company: '全興工業',
        title: 'ME 股長',
        description: '產線改善規劃、流程分析、成本效益評估、跨部門協調；榮獲彰化縣勞工模範'
      }
    ],
    skills: [
      '人資制度與行政管理',
      '員工服務與後勤支援',
      '專案規劃與跨部門協調',
      '穩定可靠、責任感強、能獨立完成任務'
    ],
    bio: `畢業於高工製圖科，並於 2007–2009 年就讀彰化建國科技大學工業工程與管理系（在職進修）。求學期間半工半讀完成學業，養成務實、負責與耐勞的工作態度。職涯涵蓋製造業、保險服務業以及人資行政管理，累積現場實務、企劃改善、跨部門協調與制度推動經驗。

1986–1995 年任全興工業 ME 股長，負責產線改善規劃、流程分析與成本效益評估，榮獲彰化縣勞工模範。1996–2004 年進入保險服務業，九年內從零晉升襄理，培養自我管理與溝通協調能力。2005–2009 年於健生公司擔任企劃及股長，參與全拓公司舊址翻新專案，並赴印尼協助產線 Layout。2010–2024 年於全興公司中國南京總部擔任人資總務部長，負責人資制度、行政總務及員工服務，並赴杭州推展新能源配套人力與後勤規劃。

工作態度穩定、責任感強，能獨立完成交辦事項，重視團隊合作與紀律。期望尋求穩定之行政／總務／人資職位，運用多年經驗提供實際且可靠的貢獻。`
  });

  const generateHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>${resume.name} - 簡歷</title>
  <style>
    @page { size: A4; margin: 15mm; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: "Microsoft JhengHei", "PingFang TC", sans-serif; 
      font-size: 11pt; 
      line-height: 1.6; 
      color: #333;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 { font-size: 24pt; font-weight: bold; margin-bottom: 8px; }
    h2 { font-size: 13pt; font-weight: bold; margin-bottom: 8px; color: #222; }
    .contact { display: flex; gap: 24px; color: #555; font-size: 10pt; margin-bottom: 16px; }
    .contact-item { display: flex; align-items: center; gap: 6px; }
    .icon { width: 14px; height: 14px; }
    hr { border: none; border-top: 1px solid #ccc; margin: 16px 0; }
    section { margin-bottom: 16px; }
    ul { padding-left: 16px; }
    li { margin-bottom: 4px; }
    .exp-header { font-weight: 600; margin-bottom: 4px; }
    .exp-desc { color: #555; margin-bottom: 12px; }
    .bio { text-align: justify; white-space: pre-line; }
    .separator { color: #999; margin: 0 8px; }
    @media print {
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <h1>${resume.name}</h1>
  <div class="contact">
    <div class="contact-item">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      ${resume.phone}
    </div>
    <div class="contact-item">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
      ${resume.email}
    </div>
  </div>
  
  <hr>
  
  <section>
    <h2>學歷</h2>
    <ul>
      ${resume.education.map(edu => `<li>${edu}</li>`).join('\n      ')}
    </ul>
  </section>
  
  <hr>
  
  <section>
    <h2>工作經歷</h2>
    ${resume.experiences.map(exp => `
    <div>
      <div class="exp-header">${exp.period}<span class="separator">｜</span>${exp.company}<span class="separator">｜</span>${exp.title}</div>
      <div class="exp-desc">${exp.description}</div>
    </div>`).join('')}
  </section>
  
  <hr>
  
  <section>
    <h2>核心能力</h2>
    <ul>
      ${resume.skills.map(skill => `<li>${skill}</li>`).join('\n      ')}
    </ul>
  </section>
  
  <hr>
  
  <section>
    <h2>自傳</h2>
    <div class="bio">${resume.bio}</div>
  </section>
</body>
</html>`;
    return html;
  };

  const handleDownload = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resume.name}_簡歷.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const updateExperience = (index, field, value) => {
    const newExperiences = [...resume.experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setResume({ ...resume, experiences: newExperiences });
  };

  const updateEducation = (index, value) => {
    const newEducation = [...resume.education];
    newEducation[index] = value;
    setResume({ ...resume, education: newEducation });
  };

  const updateSkill = (index, value) => {
    const newSkills = [...resume.skills];
    newSkills[index] = value;
    setResume({ ...resume, skills: newSkills });
  };

  const EditableText = ({ value, onChange, className = '', multiline = false }) => {
    if (!isEditing) {
      return <span className={className}>{value}</span>;
    }
    if (multiline) {
      return (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${className} w-full border border-blue-300 rounded px-2 py-1 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none`}
          rows={8}
        />
      );
    }
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${className} border border-blue-300 rounded px-2 py-1 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      {/* 控制按鈕 */}
      <div className="sticky top-0 bg-white shadow-sm z-10 px-4 py-3 flex flex-col items-center gap-2">
        <div className="flex gap-3">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition-colors text-sm font-medium ${
              isEditing 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
            }`}
          >
            {isEditing ? <Check size={18} /> : <Edit3 size={18} />}
            {isEditing ? '完成編輯' : '編輯內容'}
          </button>
          <button
            onClick={handleDownload}
            disabled={isEditing}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition-colors text-sm font-medium ${
              isEditing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Download size={18} />
            下載 HTML
          </button>
        </div>
        <p className="text-xs text-gray-500">
          <FileText size={12} className="inline mr-1" />
          下載後用瀏覽器開啟 → 按 Ctrl+P (或 Cmd+P) → 選擇「儲存為 PDF」
        </p>
      </div>

      {isEditing && (
        <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2 text-center text-yellow-800 text-sm">
          📝 編輯模式：點擊任何文字即可修改
        </div>
      )}

      {/* 簡歷內容 */}
      <div className="max-w-3xl mx-auto mt-6 px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            {/* 標題區 */}
            <div className="mb-5">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                <EditableText
                  value={resume.name}
                  onChange={(v) => setResume({ ...resume, name: v })}
                />
              </h1>
              <div className="flex flex-wrap gap-5 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-400" />
                  <EditableText
                    value={resume.phone}
                    onChange={(v) => setResume({ ...resume, phone: v })}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-400" />
                  <EditableText
                    value={resume.email}
                    onChange={(v) => setResume({ ...resume, email: v })}
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-200 mb-5" />

            {/* 學歷 */}
            <section className="mb-5">
              <h2 className="text-lg font-bold text-gray-800 mb-2">學歷</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                {resume.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    <EditableText
                      value={edu}
                      onChange={(v) => updateEducation(idx, v)}
                      className="flex-1"
                    />
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-gray-200 mb-5" />

            {/* 工作經歷 */}
            <section className="mb-5">
              <h2 className="text-lg font-bold text-gray-800 mb-3">工作經歷</h2>
              <div className="space-y-4">
                {resume.experiences.map((exp, idx) => (
                  <div key={idx}>
                    <div className="font-semibold text-gray-800 text-sm">
                      <EditableText
                        value={exp.period}
                        onChange={(v) => updateExperience(idx, 'period', v)}
                      />
                      <span className="text-gray-300 mx-2">｜</span>
                      <EditableText
                        value={exp.company}
                        onChange={(v) => updateExperience(idx, 'company', v)}
                      />
                      <span className="text-gray-300 mx-2">｜</span>
                      <EditableText
                        value={exp.title}
                        onChange={(v) => updateExperience(idx, 'title', v)}
                      />
                    </div>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                      <EditableText
                        value={exp.description}
                        onChange={(v) => updateExperience(idx, 'description', v)}
                        className="w-full"
                      />
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-gray-200 mb-5" />

            {/* 核心能力 */}
            <section className="mb-5">
              <h2 className="text-lg font-bold text-gray-800 mb-2">核心能力</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                {resume.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    <EditableText
                      value={skill}
                      onChange={(v) => updateSkill(idx, v)}
                      className="flex-1"
                    />
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-gray-200 mb-5" />

            {/* 自傳 */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 mb-2">自傳</h2>
              <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line text-justify">
                <EditableText
                  value={resume.bio}
                  onChange={(v) => setResume({ ...resume, bio: v })}
                  multiline={true}
                  className="w-full"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

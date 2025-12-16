import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="app-container" className="bg-[#001f54] text-white">
      <header className="bg-[#001f54]/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            Ni<span className="text-[#ffbd00]">Va</span>
          </a>
          <a href="#pricing" className="bg-[#ffbd00] text-[#001f54] font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
            Đăng ký ngay
          </a>
        </div>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f54]/90 to-[#001f54]/70"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#ffbd00] leading-tight mb-4 tracking-wide animate-on-scroll" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}>
              Thách Thức 28 Ngày Thay Áo Fanpage
            </h1>
            <p className="text-2xl md:text-4xl font-semibold mb-8 animate-on-scroll delay-100" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
              Tăng 200% Tương Tác Từ Phụ Huynh Tiềm Năng
            </p>
            <a href="#pricing" className="bg-[#ffbd00] text-[#001f54] font-bold py-4 px-10 rounded-full text-xl hover:bg-yellow-400 transition duration-300 transform hover:scale-105 inline-block animate-on-scroll delay-200 glow-on-hover">
              Đăng ký ngay
            </a>
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 animate-on-scroll delay-300 text-lg">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffbd00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Không chạy ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffbd00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Không thuê agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffbd00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Không cần kỹ thuật</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 bg-[#001f54]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#ffbd00] mb-8 animate-on-scroll leading-tight">
                Fanpage Của Bạn Có Đang Tuyển Sinh Tốt Không?<br className="hidden md:block" /> Hay Chỉ Là Kênh "Up Hình Hoạt Động"?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll delay-100">Nếu bạn đang gặp phải những vấn đề này, fanpage của trường đang dần trở nên mờ nhạt trong mắt phụ huynh.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { text: "Đăng bài không ai xem, tương tác chủ yếu từ giáo viên.", icon: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586A2 2 0 1015.172 7z" },
                { text: "Ảnh, màu sắc, font chữ không thống nhất, thiếu chuyên nghiệp.", icon: "M10 20l4-16m4 4l-4 4-4-4M6 16l-4-4 4-4" },
                { text: "Nội dung 'đúng chuyên môn' nhưng không chạm insight phụ huynh.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                { text: "Tựa đề bài viết chưa thu hút, không nói lên lợi ích cho phụ huynh.", icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
                { text: "Video không có mục đích rõ ràng, không truyền tải được thông điệp.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
                { text: "Không biết đo lường hiệu quả, không rõ nội dung nào thu hút.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z" },
              ].map((item, index) => (
                <div key={index} className="bg-[#062c6f] p-8 rounded-xl shadow-lg flex items-start space-x-5 animate-on-scroll" style={{ transitionDelay: `${200 + index * 100}ms` }}>
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffbd00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                  </div>
                  <p className="text-lg text-gray-200">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center animate-on-scroll">
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-200 italic border-l-4 border-[#ffbd00] pl-8 py-4 text-left">
                "Fanpage là mặt tiền của Trường. Thay vì để mặt tiền cũ kỹ, khô khan khiến phụ huynh lướt qua, hãy <span className="font-bold text-white underline decoration-[#ffbd00] decoration-4 underline-offset-4">Thay Áo</span> cho nó để thu hút phụ huynh tự vào bên trong tìm hiểu."
              </p>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-24 bg-gray-50 text-[#001f54]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll tracking-wide">Kết Quả Đạt Được Sau 28 Ngày</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3 animate-on-scroll delay-100">
                <img src="https://123angels.vn/thach-thuc-28-ngay-thay-ao-fanpage/chrome_PUdG01gmZo.png" alt="Happy Asian parents" className="rounded-xl shadow-2xl object-cover h-full w-full" />
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Tăng 200% Tương Tác Thật", desc: "Từ phụ huynh đúng tệp, không còn là những lượt thích, bình luận 'nội bộ'." },
                  { title: "Nội Dung Thu Hút & Cảm Xúc", desc: "Nội dung thật hơn, đa dạng, có cảm xúc, khiến phụ huynh lạ phải dừng lại xem." },
                  { title: "Vượt Qua Bí Ý Tưởng", desc: "Nắm vững 20 concept kịch bản đa dạng, không bao giờ lo bí ý tưởng content." },
                  { title: "Bậc Thầy Viết Tiêu Đề", desc: "Biết cách viết tựa đề ĐÚNG insight, thu hút đúng tệp phụ huynh." }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4 h-full animate-on-scroll" style={{ transitionDelay: `${300 + index * 100}ms` }}>
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#001f54]">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-24 bg-[#001f54]">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 animate-on-scroll">
              <img src="https://123angels.vn/thach-thuc-28-ngay-thay-ao-fanpage/chrome_fB78PhKlkM.png" alt="NiVa" className="rounded-full shadow-lg mx-auto border-4 border-[#ffbd00] w-64 h-64 object-cover" />
            </div>
            <div className="lg:w-2/3 animate-on-scroll delay-100">
              <h2 className="text-3xl font-bold text-center lg:text-left text-[#ffbd00] mb-6 tracking-wide">NiVa – Người Đồng Hành Cùng Người Làm Giáo Dục</h2>
              <div className="text-lg text-gray-200 space-y-4 bg-[#062c6f] p-8 rounded-xl relative">
                <svg className="absolute top-4 left-4 w-10 h-10 text-[#ffbd00]/20" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 22.667h4L17.333 16V9.333H5.333v13.334h4v-8.334L9.333 22.667zM22.667 22.667h4L30.667 16V9.333H18.667v13.334h4v-8.334l-4 8.334z"></path></svg>
                <p className="italic relative z-10">
                  “Tôi đang làm việc với hơn 200 trường mầm non tại TP.HCM. Phần lớn có đội ngũ tốt, chương trình tốt, nhưng fanpage lại quá khô khan... không phản ánh hết những điều Trường đang có.”
                </p>
                <p className="font-semibold text-white relative z-10 pt-4">
                  NiVa tin rằng, khi bạn thay đổi và đa dạng hóa nội dung, Fanpage của bạn sẽ có linh hồn hơn, từ đó thu hút được tệp khách hàng tiềm năng.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Outline Section */}
         <section className="py-24 bg-gray-50 text-[#001f54]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll tracking-wide">Lộ Trình 28 Ngày Thay Đổi Fanpage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { phase: "Giai đoạn 1: Làm Đẹp & Chuẩn Hóa", items: ["Định vị hình ảnh, tone màu", "Chuẩn hóa profile & thông tin", "Thu thập và đo lường chỉ số"] },
                { phase: "Giai đoạn 2: Viết Nội Dung Giá Trị", items: ["20+ Cấu trúc tiêu đề & concept", "Thực hành quay video mới", "Triển khai, đo lường & tối ưu"] },
                { phase: "Giai đoạn 3: Bùng Nổ Tương Tác", items: ["20+ Cấu trúc & concept nâng cao", "Tập trung vào content thu hút", "Đo lường và so sánh hiệu quả"] },
                { phase: "Giai đoạn 4: Biến Tương Tác Thành Tuyển Sinh", items: ["Cách tư vấn tăng chuyển đổi", "Tạo Mini landing page", "Quy trình phát triển bền vững"] }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: `${200 + index * 100}ms` }}>
                  <h3 className="text-xl font-bold text-[#001f54] mb-4">{item.phase}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 flex-grow">
                    {item.items.map((sub, i) => <li key={i}>{sub}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-24 bg-[#001f54]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#ffbd00] mb-12 animate-on-scroll tracking-wide">Khóa Học Này Dành Riêng Cho Ai?</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Chủ trường mầm non – tiểu học muốn tăng tuyển sinh",
                "Hiệu trưởng muốn fanpage chạm và thu hút Phụ Huynh Tiềm Năng",
                "Người phụ trách truyền thông trường học",
                "Giáo viên phụ trách page, muốn không bị bí ý tưởng"
              ].map((text, index) => (
                <div key={index} className="flex items-center space-x-4 bg-[#062c6f] p-5 rounded-lg animate-on-scroll" style={{ transitionDelay: `${200 + index * 100}ms` }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffbd00] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <p className="text-lg text-gray-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-24 bg-gray-50 text-[#001f54]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll tracking-wide">Quà Tặng Đặc Biệt Khi Đăng Ký Ngay</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll delay-100">Những phần quà này sẽ giúp bạn đi nhanh và xa hơn trên hành trình xây dựng thương hiệu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Bộ Câu Hỏi Tìm Bản Sắc", desc: "Nền móng của thương hiệu. Đừng làm gì cả khi chưa tìm ra bản sắc cá nhân.", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "1 Buổi Coaching 1:1 với NiVa", desc: "Giải đáp sâu các vấn đề riêng của trường bạn và nhận định hướng chiến lược.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { title: "Hỗ Trợ 2 Tuần Sau Khóa Học", desc: "Tiếp tục được đồng hành và giải đáp thắc mắc để đảm bảo bạn áp dụng thành công.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center h-full transform hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: `${300 + index * 100}ms` }}>
                  <div className="text-[#001f54] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#001f54] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-[#001f54]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#ffbd00] mb-4 animate-on-scroll tracking-wide">Học Phí & Hình Thức Học</h2>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Left Card */}
              <div className="lg:w-5/12 bg-[#062c6f] p-8 rounded-xl shadow-lg flex flex-col animate-on-scroll delay-100 border border-blue-800">
                <h3 className="text-2xl font-bold text-center mb-6 text-white uppercase tracking-wider">Hình Thức Học Online</h3>
                <ul className="space-y-4 text-lg text-gray-200 flex-grow">
                  {[
                    "Online trong nhóm kín (Skool / Facebook Group).",
                    "Mỗi ngày nhận 1 video hướng dẫn + 1 nhiệm vụ.",
                    "Hệ thống theo dõi điểm và xếp hạng.",
                    "Cam kết: Tăng 200% tương tác nếu làm đúng."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#ffbd00] mr-3 mt-1 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Card (Main) */}
              <div className="lg:w-7/12 p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl animate-on-scroll delay-200 transform scale-105 md:scale-100 lg:scale-105 relative z-10">
                <div className="bg-[#062c6f] h-full p-6 md:p-8 rounded-xl flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-center text-[#ffbd00] mb-2">Học Phí Đầu Tư</h3>
                  
                  <div className="text-center my-4">
                    <p className="text-gray-400 text-xl line-through mb-1">9.999.000đ</p>
                    <p className="text-5xl md:text-6xl font-extrabold text-[#ffbd00] animate-pulse">4.898.000đ</p>
                  </div>

                  {/* Cam Kết */}
                  <div className="bg-[#001f54]/60 rounded-lg p-5 mb-6 border border-[#ffbd00]/40">
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-[#ffbd00] text-[#001f54] text-sm font-bold px-3 py-1 rounded-full uppercase">Cam Kết Hoàn Tiền</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p className="text-white text-sm md:text-base"><strong className="text-[#ffbd00]">HOÀN TIỀN 100% HỌC PHÍ</strong> nếu làm đủ nội dung hướng dẫn và đạt mục tiêu tăng trưởng 200% tương tác.</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-[#ffbd00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p className="text-white text-sm md:text-base"><strong className="text-[#ffbd00]">HỖ TRỢ TRỌN ĐỜI:</strong> Nếu làm đủ mà chưa đạt mục tiêu tăng 200%, bạn sẽ được hỗ trợ cho đến khi đạt.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="font-bold text-center text-lg text-white mb-4">Quét mã để thanh toán</h4>
                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                      <div className="relative group">
                        <img src="https://dps.media/wp-content/uploads/2025/12/download.png" alt="QR Code Payment" className="w-36 h-36 rounded-md bg-white p-1 shadow-lg"/>
                        <div className="absolute inset-0 bg-[#ffbd00]/20 hidden group-hover:block transition-all rounded-md pointer-events-none"></div>
                      </div>
                      <div className="text-left text-white text-sm md:text-base">
                        <p className="mb-1"><span className="font-semibold text-gray-300 w-24 inline-block">Ngân hàng:</span> <span className="font-bold text-[#ffbd00]">ACB</span></p>
                        <p className="mb-1"><span className="font-semibold text-gray-300 w-24 inline-block">Số TK:</span> <span className="font-mono text-xl">366288</span></p>
                        <p><span className="font-semibold text-gray-300 w-24 inline-block">Chủ TK:</span> <span className="uppercase">Nguyen Dang Thi Ni Va</span></p>
                      </div>
                    </div>
                    <div className="mt-6 text-center bg-white/10 py-2 rounded-lg">
                      <p className="text-yellow-300 text-sm font-semibold">Nội dung CK: <span className="font-bold text-white font-mono bg-[#001f54] px-2 py-1 rounded ml-1">[Tên] - [SĐT] - 28 Ngay</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50 text-[#001f54] bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-wide">
                Sẵn Sàng Biến Fanpage Thành Cỗ Máy Tuyển Sinh?
              </h2>
              <a href="#pricing" className="bg-[#ffbd00] text-[#001f54] font-bold py-4 px-12 rounded-full text-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105 inline-block shadow-lg glow-on-hover">
                ĐĂNG KÝ THAM GIA THỬ THÁCH
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#001133] py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <h3 className="text-3xl font-bold text-white mb-2">Ni<span className="text-[#ffbd00]">Va</span></h3>
          <p className="text-lg text-gray-300 mb-4">Người Đồng Hành Cùng Người Làm Giáo Dục</p>
          <p className="max-w-xl mx-auto">Giúp Chủ Trường Xây Thương Hiệu – Tuyển Sinh Bền Vững – Sống Bình An</p>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p>&copy; {new Date().getFullYear()} NiVa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
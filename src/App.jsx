import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import { LayoutDashboard, PlusCircle } from 'lucide-react'; // Dùng thư viện icon bạn vừa cài

function App() {
  return (
      <Router>
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <header style={{ borderBottom: '2px solid #eee', marginBottom: '20px' }}>
            <h1>💰 Money Manager</h1>
            <nav style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <PlusCircle size={20} /> Nhập liệu
              </Link>
              <Link to="/statistics" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <LayoutDashboard size={20} /> Thống kê
              </Link>
            </nav>
          </header>

          <main>
            {/* Đây là nơi nội dung các trang sẽ thay đổi khi bạn bấm Link */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
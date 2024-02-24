
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function MainLayout({ children }) {
  return (
    <>
    <Header />
    <div className="flex flex-col min-h-screen mx-auto">
      <div className="flex-grow"> 
        <main className="">{children}</main>
      </div>
      <Footer />
    </div>
    </>
    
  );
}

import Ordersview from './Ordersview'
import Menuview from './Menuview';

function Index() {
  return (
    <>
      <p className="text-white fs-4 mb-5 mt-3">Welcome to MyCafeSystem Management Dashboard</p>
      <Ordersview/>
      <Menuview/>
    </>
  );
}

export default Index;
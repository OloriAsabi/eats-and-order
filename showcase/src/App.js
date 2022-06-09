
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Get the best meals in your pocket"
        description="Order, Pickup, pay and enjoy"
        showBtn
        mockupImg={assets.food2}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface"
        description="Experience a buttery UI of Eats and Order. Smooth constant colors of a fluent UI design."
        mockupImg={assets.chris}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="Eats And Order is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.faisal}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the food"
        description="The app contains mutiple screens. The first screen lists all foods avaliable for pickup and delivery while the second one shows the details of a specific Food and you can view order and order your delicious meals."
        mockupImg={assets.food}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Olori Asabi</span>
        </p>
      </div>
    </>
  );
}

export default App;

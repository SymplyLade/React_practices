import Profile from "./profile";
import AmakaImages from "./assets/images/Amaka.jpg";
import OpnexImages from "./assets/images/Opnex.jpg";

function App() {
  return (
    <div>
      <Profile
        image={AmakaImages}
        name="Amaka Johnson"
        role="Chef"
        bio="Passionate about food, creativity, and the joy of making others happy through her culinary creations. 
        This passion is also extend to mastering new skills, understanding different cultures through food, building a business, and leading a kitchen team. "
      />

      <Profile
        image={OpnexImages}
        name="Thomas Opeyemi"
        role="Frontend Developer"
        bio="Passionate about creating modern, responsive web experiences."
      />
    </div>
  );
}

export default App;

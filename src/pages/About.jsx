const cardStyles = {
    container: {
      
      display: "flex",
      height: 100,
      width: 400,
      boxShadow: "0 0 3px 2px #cec7c759",
      alignItems: "center",
      padding: 20,
      borderRadius: 20,
    },
    profilePicture: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "orange",
      color: "white",
      height: 20,
      width: 20,
      borderRadius: "50%",
      padding: 10,
      fontWeight: "bold",
    },
    bio: {
      marginLeft: 10,
    },
    userName: {
      fontWeight: "bold",
    },
  };
  
//   function userCardComponent(){
  
//            <div style={cardStyles.container}>
//           <span style={cardStyles.profilePicture}><img src="../src/assets/images/me.webp" alt="My Avatar" width="150" /></span>
//           <div style={cardStyles.bio}>
//             <p style={cardStyles.userName}>Desmond Nyamador</p>
//             <p>I just learned an easy way to style React Components</p>
//           </div>
//         </div>
  
//   }
const About = () => {
    return (
        <div style={cardStyles.container}>
        <span style={cardStyles.profilePicture}><img src="../src/assets/images/me.webp" alt="My Avatar" width="150" /></span>
        <div style={cardStyles.bio}>
          <p style={cardStyles.userName}>Michel Gomes</p>
          <p>I am a  Fullstack junior developer expanding my skills. This app showcases the projects I've worked on and the technologies I've learned. </p>
        </div>
      </div>
    );
};

export default About;
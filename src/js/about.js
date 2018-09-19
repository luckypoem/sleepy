import Highway from "@dogstudio/highway";

class About extends Highway.Renderer {
  onEnter() {
    console.log("About: onEnter");
  }
  onLeave() {
    console.log("About: onLeave");
  }
  onEnterCompleted() {
    console.log("About: onEnterCompleted");
  }
  onLeaveCompleted() {
    console.log("About: onLeaveCompleted");
  }
}

export default About;

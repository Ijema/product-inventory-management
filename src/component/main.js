import "../styles/main.css"
import {FacebookOutlined, TwitterOutlined, WhatsAppOutlined,SkypeOutlined,InstagramOutlined} from '@ant-design/icons'

function Main() {
  return (
     <div class="content">
            <h1>Hi there,</h1>
            <p class="par">Inventory chaos causing unnecessary stress and lost revenue? Gain control, streamline your inventory management, and maximise profits with ONARE Inventory.</p>
            <button class="cn">Get Started </button>

            <div class="form">
                <h2> Login here</h2>
                <input type="email" name=" Email" placeholder="Enter Email Here"/>
                <input type="password" name=" password" placeholder="Enter Password Here"/>
                <button class="btnn">Login</button>

                <p class="link">Don't have an account?
                Sign up here</p>
                <p class="liw">Login in With </p>

                <div class="icons">
                  <FacebookOutlined/>,<TwitterOutlined/>,< WhatsAppOutlined/>,<SkypeOutlined/>,<InstagramOutlined/>
                </div>

            </div>

        </div>
  );
}

export default Main;



import { wrapMDX } from './root-mdx';
import './src/css/main.css';

export const wrapRootElement = wrapMDX;

// export const onRenderBody = ({ setHeadComponents }) => {
//   setHeadComponents([
//     <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />,
//   ]);
// };

import "./SplineScene.css";
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div className="spline-scene">
      <Spline scene="https://prod.spline.design/PLiNorrYzWPsRzRw/scene.splinecode" />
    </div>
  );
}

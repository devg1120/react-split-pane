import { useState , useEffect} from 'react'
import { SplitPane, Pane } from 'react-split-pane';
import type { DividerProps } from "react-split-pane";

import { GripVertical } from "lucide-react"; // アイコンライブラリ
import { GripIcon } from "lucide-react"; // アイコンライブラリ

import './style.css'

function App() {

  const [sizesL, setSizesL] = useState([300,300])
  const [sizesR, setSizesR] = useState([300,300])

/*
  useEffect(() => {
  
   setSizesR(sizesL);
  
  }, [sizesL]);

  useEffect(() => {
  
   setSizesL(sizesR);
  
  }, [sizesR]);
*/

/*
function CustomDivider(props: DividerProps) {
  const {
    direction,
    isDragging,
    disabled,
    onMouseDown,
    onTouchStart,
    onTouchEnd,
    onKeyDown,
  } = props;

  return (
    <div
      role="separator"
      aria-orientation={direction === 'horizontal' ? 'vertical' : 'horizontal'}
      tabIndex={disabled ? -1 : 0}
      className={`custom-divider ${direction}${isDragging ? ' dragging' : ''}`}
      onMouseDown={disabled ? undefined : onMouseDown}
      onTouchStart={disabled ? undefined : onTouchStart}
      onTouchEnd={disabled ? undefined : onTouchEnd}
      onKeyDown={disabled ? undefined : onKeyDown}
    />
  );
}
*/
/*
 return (
    <div className="example-container">
      <div className="example-header">
        <h2>Nested Split Panes</h2>
        <p>Create complex layouts by nesting split panes.</p>
      </div>

      <div className="example-content">
        <SplitPane direction="horizontal" divider={CustomDivider}>
          <Pane defaultSize={"50%"}>
            <SplitPane direction="vertical" divider={CustomDivider} onResize={setSizesR} >

              <Pane size={sizesL[0]} defaultSize={"50%"}>
                <div className="pane">
                  <h3>TL</h3>
                </div>
              </Pane>

              <Pane  >
                <div className="pane gray">
                  <h3>BL</h3>
                </div>
              </Pane>

            </SplitPane>
          </Pane>

          <Pane >
            <SplitPane direction="vertical" divider={CustomDivider} onResize={setSizesL} >

              <Pane size={sizesR[0]} defaultSize={"50%"}>
                <div className="pane">
                  <h3>TR</h3>
                </div>
              </Pane>

              <Pane >
                <div className="pane gray">
                  <h3>BR</h3>
                </div>
              </Pane>

            </SplitPane>
          </Pane>
        </SplitPane>
      </div>

    </div>
  );
*/

 return (
    <div className="example-container">
      <div className="example-header">
        <h2>Nested Split Panes</h2>
        <p>Create complex layouts by nesting split panes.</p>
      </div>

      <div className="example-content">
        <SplitPane direction="horizontal" >
          <Pane defaultSize={"50%"}>
            <SplitPane direction="vertical"  onResize={setSizesR} >

              <Pane size={sizesL[0]} defaultSize={"50%"}>
                <div className="pane">
                  <h3>TL</h3>
                </div>
              </Pane>

              <Pane  >
                <div className="pane">
                  <h3>BL</h3>
                </div>
              </Pane>

            </SplitPane>
          </Pane>

          <Pane >
            <SplitPane direction="vertical"  onResize={setSizesL} >

              <Pane size={sizesR[0]} defaultSize={"50%"}>
                <div className="pane">
                  <h3>TR</h3>
                </div>
              </Pane>

              <Pane >
                <div className="pane">
                  <h3>BR</h3>
                </div>
              </Pane>

            </SplitPane>
          </Pane>
        </SplitPane>
      </div>

    </div>
  );

}

export default App

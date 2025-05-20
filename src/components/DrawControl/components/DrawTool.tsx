import { useState } from "react";
import { MdClear, MdOutlineDraw } from "react-icons/md";
import "./index.scss";

const DrawTools = ({
  body,
  children,
  animate,
  position,
  direction,
  type,
}: {
  body?: any;
  children?: any;
  animate?: boolean;
  position?: any;
  direction?: any;
  type?: any;
}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const Greeting = () => {
    return (
      //   <Tooltip title={toggle ? t('draws.close') : title} placement="bottom">
      <button
        className="custom-tool-icon"
        style={{
          borderRadius: type == "circle" ? "50%" : "6px",
        }}
        onClick={handleToggle}
      >
        <span className={animate ? `custom-icon` : ""}>
          {toggle ? <MdClear size={20} /> : <MdOutlineDraw size={20} />}
        </span>
      </button>
      //   </Tooltip>
    );
  };
  return (
    <div
      className="draw-tools-container"
      style={{
        left: position?.left ? `${position?.left}px` : "",
        top: position?.top ? `${position?.top}px` : "",
        right: position?.right ? `${position?.right}px` : "",
        bottom: position?.bottom ? `${position?.bottom}px` : "",
        flexDirection: direction,
      }}
    >
      {toggle && (
        <div
          className={
            direction == "column"
              ? "custom-tool-body-fade-up"
              : "custom-tool-body-fade-in-right"
          }
        >
          {children && (
            <div
              className="container-content"
              style={{
                display: "flex",
                flexDirection: direction,
                gap: 4,
              }}
            >
              {children?.map((child: any, index: number) => {
                return (
                  <button
                    key={index}
                    disabled={child?.disabled ?? false}
                    className={`custom-icon-wrapper ${
                      child?.active ? "active" : ""
                    } `}
                    style={{
                      borderRadius: type == "circle" ? "50%" : "6px",
                    }}
                    onClick={child?.onClick}
                  >
                    <span className="custom-icon">{child?.icon}</span>
                  </button>
                );
              })}
            </div>
          )}
          {body}
        </div>
      )}

      <Greeting />
    </div>
  );
};

export default DrawTools;

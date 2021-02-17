import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

export type VisibleComponentProps = {
  visible: boolean;
  fadeDuration?: number;
  visibilityDuration?: number;
  onToggle?: () => void;
};

const VisibleComponent: React.FC<PropsWithChildren<VisibleComponentProps>> = ({
  visible,
  fadeDuration,
  visibilityDuration,
  onToggle,
  children,
}) => {
  const [inFade, setInFade] = useState(false);

  useEffect(() => {
    if (visibilityDuration && visible) {
      setTimeout(() => {
        setInFade(false);
      }, visibilityDuration);
    }
  }, [visibilityDuration, visible]);

  useEffect(() => {
    setInFade(visible);
  }, [visible]);

  const defaultStyle = {
    transition: `opacity ${fadeDuration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const endListener = (node: HTMLElement, done: () => void) => {
    node.addEventListener('transitionend', done, false);
  };

  return (
    <Transition
      in={inFade}
      timeout={fadeDuration}
      addEndListener={endListener}
      onExited={onToggle}
      unmountOnExit
    >
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            // @ts-ignore-next-line
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default VisibleComponent;

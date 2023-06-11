import React from 'react';

export default function Alert({
  show,
  onHide,
  className,
  children,
  variant = 'danger',
  ...others
}) {
  return (
    <>
      {show ? (
        <div
          className={
            'alert d-flex justify-content-between alert-' +
            variant +
            ' ' +
            className
          }
          role="alert"
        >
          <div>{children}</div>

          {onHide ? (
            <div style={{ cursor: 'pointer' }} onClick={onHide}>
              X
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
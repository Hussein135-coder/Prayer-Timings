// eslint-disable-next-line react/prop-types
const ModalComp = ({ modalId, title, content }) => {
  return (
    <div
      data-twe-modal-init
      className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id={modalId}
      tabIndex="-1"
      aria-labelledby="locationLabel"
      aria-modal="true"
      role="dialog"
    >
      <div
        data-twe-modal-dialog-ref
        className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[300px]"
      >
        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
            <h5
              className="text-xl font-medium leading-normal text-surface dark:text-white"
              id="locationLabel"
            >
              {title}
            </h5>
          </div>

          <div className="relative p-4">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalComp;

import { Modal } from "../global/Modal";

export const UpdateSubcategory = ({ state, setState }) => {
  return (
    <Modal state={state} setState={setState}>
      <div>
          <input value={state.category} disabled={true} />
          <input value={state.newSubcategory} disabled={true} />
          <button>Update</button>
      </div>
    </Modal>
  );
};

import { Modal } from "../global/Modal";

export const UpdateSubcategory = ({ state, setState }) => {
  return (
    <Modal state={state} setState={setState}>
      <div>
        <input value={state.name} disabled={true} />
        <input value={state.newSubcategory} disabled={false} />
        <button>Update</button>
      </div>
    </Modal>
  );
};

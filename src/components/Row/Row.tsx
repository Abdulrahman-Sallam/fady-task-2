import { TiEdit, TiDelete } from 'react-icons/ti';
import { Data } from '../../interfaces/Data';
import './Row.css';

export default function Row({
  item,
  viewData,
  updateData,
  deleteData,
}: {
  item: Data;
  viewData: string[];
  updateData?: (id: string) => void;
  deleteData?: (id: string) => void;
}) {
  return (
    <div className="grid-table-row" key={item._id}>
      {viewData.map((key) => (
        <div className="grid-table-cell" key={key}>
          {item[key] ? item[key] : 'no data'}
        </div>
      ))}
      <div className="grid-table-cell">
        {updateData && (
          <TiEdit
            className="edit icon"
            onClick={() => {
              updateData(item._id);
            }}
          />
        )}
        {deleteData && (
          <TiDelete
            className="delete icon"
            onClick={() => {
              deleteData(item._id);
            }}
          />
        )}
      </div>
    </div>
  );
}

import React, {useState} from 'react';

// IMPORT COMPONENTS
import NewUserButton from '../boutons/NewUser.Button';
import NewModelButton from '../boutons/NewModel.Button';
import ReturnHandle from '../boutons/Return.Handle';
import NewmodelForm from './Newmodel.Form';
import NewuserForm from './Newuser.Form';

const AdminContainer = () => {

  const [adminOption, setAdminOption] = useState('newModel');

  console.log('ADMIN OPTION: ', adminOption);

  return (
    <>
      <div className='navbar'>
        <NewUserButton setAdminOption={setAdminOption} />
        <NewModelButton setAdminOption={setAdminOption} />
        <ReturnHandle />
      </div>

      { adminOption === 'newModel' ? (<NewmodelForm />) : ('')}

      { adminOption === 'newUser' ? (<NewuserForm />) : ('')}
    </>
  );
}

export default AdminContainer;

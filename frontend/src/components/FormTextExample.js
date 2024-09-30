//import Form from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';
import Button from 'react-bootstrap/Button';
import { createYourApp } from '../providers/deploy'

import { useState } from 'react';

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

function SiteInfo (props) {
  const data = props.state
  if (data?.length > 0) {
    return <p>{data}</p>
  }
  return <p></p>
}

function FormTextExample() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [siteState, setSiteState] = useState('')

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('org', data.org);
    formData.append('appname', data.appname);
    console.log(data)
    formData.append('logo', !!data.logo?.length ? data.logo[0] : null);

    try {
      const logo = !!data.logo?.length ? await toBase64(data.logo[0]) : ''
      await createYourApp({ ...data, logo })
      //await dispatch(registerUser(formData)).unwrap();
      //setSiteState('success !!')
    } catch (err) {
      setSiteState(err.message)
    }
  };
  
  const formCss = {
    padding: "30px"
  }

  const jump = {
    marginBottom: '20px'
  }

  const appData = [
    /*{ 
      "name": "Email address",
      "placeholder": "Email",
      "register": "email",
      "type": "email"
    },*/
    { 
      "name": "Username",
      "placeholder": "Username",
      "register": "username",
      "type": "text"
    },
    { 
      "name": "AppName",
      "placeholder": "AppName",
      "register": "appname",
      "type": "text"
    },
    { 
      "name": "Password",
      "placeholder": "Password",
      "register": "password",
      "type": "password"
    },
    { 
      "name": "Org",
      "placeholder": "Org",
      "register": "org",
      "type": "text"
    },
    /*{ 
      "name": "Logo",
      "placeholder": "Logo",
      "register": "logo",
      "type": "text",
      "disabled": true
    }*/
  ]

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={formCss}>
        {appData.map(
          (app, index) => (
            <div className="form-group" style={jump} key={ `${index}_${ Date.now( ) }`  }>
              <label>{app.name}</label>
              <input {...register(app.register)} type={app.type} className="form-control" placeholder={app.placeholder} />
            </div>
          )
        )}
        
        <div className="form-group" style={jump}>
          <Form.Group controlId="formFileDisabled" className="mb-3">
            <Form.Label>Disabled file input example</Form.Label>
            <Form.Control {...register('logo')} type="file" />
          </Form.Group>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />Check me out
          </label>
        </div>
        {/* MDN element to insert input: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file */}
        <hr />
        <Button variant="dark" type="submit" style={jump}>Register</Button>
        <SiteInfo state={siteState} />
      </form>
    </div>
  );
}

export default FormTextExample;
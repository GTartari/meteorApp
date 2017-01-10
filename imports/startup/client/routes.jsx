import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import IndexContainer from '../../ui/components/index.jsx';
import SignIn from '../../ui/components/sign_in';
import SignUp from '../../ui/components/sign_up';
import Dashboard from '../../ui/components/dashboard/dashboard.jsx';
import Statistics from '../../ui/components/dashboard/views/statistics/statistics.jsx';
import ModelParamView from '../../ui/components/dashboard/views/model_param/model_param.jsx';
import UploadDataView from '../../ui/components/dashboard/views/uploadData/uploadData.jsx';


import { NotFound } from '../../ui/pages/not_found/not_found';

/*revisar las rutas, en especial las de los hijos de dashboard*/

export const Routes = () => (
	<Router history={ browserHistory }>
		<Route path="/" component={ IndexContainer }>
            <Route path="/home" name="home" component={ IndexContainer }/>
			<Route path="/sign-in" name="signIn" component={ SignIn }/>
			<Route path="/sign-up" name="signUp" component={ SignUp }/>
			<Route path="/dashboard" component={ Dashboard }>
				<Route path="/stats" component={ Statistics }/>
				<Route path="/updata" component={ UploadDataView }/>
				<Route path="/modelparam" component={ ModelParamView }/>
			</Route>
		</Route>
		<Route name="not-found" path="*" component={ NotFound } />
	</Router>
);
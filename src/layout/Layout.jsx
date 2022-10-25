import React, { Suspense, lazy } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Content/Title';
// import FormScreen from '../screens/FormScreen';
import Loading from '../screens/WelcomeScreen';

const FormScreen = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('../screens/FormScreen')), 1500);
	});
});

function Layout() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Header title='Iniciar Sesión' />
				<Title title='Gestión de solicitudes' />
				<FormScreen />
				<Footer />
			</Suspense>
		</>
	);
}

export default Layout;

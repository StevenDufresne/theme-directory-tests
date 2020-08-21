/**
 * External dependencies
 */
import { loginUser, createURL } from '@wordpress/e2e-test-utils';

jest.setTimeout( 1000000 );

describe( 'Check Nav Bar', () => {
	beforeAll( async () => {
		await loginUser();
	} );

	const testHover = async ( name, id ) => {
		await page.goto( createURL( '/' ) );
		const toggle = await page.waitForSelector( id ) ;
		await toggle.hover();
		await page.screenshot({ path: `./images/navbar/${name}.jpg`, type: 'jpeg' });
	}

	it( 'Should grab screens of wordpress icon', async () => {
		await testHover( 'wordpress-icon', '#wp-admin-bar-wp-logo' )
	} );

	it( 'Should grab screens of "new" icon', async () => {
		await testHover( 'new-icon', '#wp-admin-bar-new-content' )
	} );

	it( 'Should grab screens of site name', async () => {
		await testHover( 'site-name', '#wp-admin-bar-site-name' )
	} );
	

	it( 'Should grab screens of the logout', async () => {
		await testHover( 'logout', '#wp-admin-bar-my-account' )

	} );
} );

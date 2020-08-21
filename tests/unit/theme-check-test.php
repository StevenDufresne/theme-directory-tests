<?php

defined( 'WPINC' ) || die();

class Test_Basic extends WP_UnitTestCase {
	/**
	 * Setup fixtures that are shared across all tests.
	 */
	public static function wpSetUpBeforeClass() {
		// Create any posts etc here.
	}

	/**
	 * Hello World.
	 */
	public function test_unit_tests_work() {
		global $themechecks;
		ob_start();
		check_main( 'oceanwp' );
		ob_end_clean();

		foreach ( $themechecks as $check ) {
			var_dump( $check );
		}

		$this->assertTrue( true );
	}
}

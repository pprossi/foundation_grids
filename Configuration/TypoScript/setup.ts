plugin.tx_foundationgrids {
	settings {
		foundationVersion = {$plugin.tx_foundationgrids.settings.foundationVersion}
	}
}

/**
 * General config
 */
# Remove 2nd column from defaultGridSetup, colpos 101, 102 are used
lib.gridelements.defaultGridSetup.columns.2 >

/**
 * Grid definitions
 */
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:foundation_grids/Configuration/TypoScript/Includes" extensions="ts">
lib.foundation_grids {
	# simple row for content elements and usage with ext:bscolwrap
	simpleRow < lib.gridelements.defaultGridSetup
	simpleRow {
		# row wrap
		wrap = <div class="row">|</div>
		columns {
			# special 111, used as check for conditional fields
			111 < .default
			111.wrap = |
		}
	}
}


/**
 * Assign foundation grid elements to gridelements extension
 */
tt_content.gridelements_pi1.20.10.setup {
	simpleRow < lib.foundation_grids.simpleRow
}
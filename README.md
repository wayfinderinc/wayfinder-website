# Wayfinder Web Site 2015
## A Craft CMS-based site with custom SPA JS front-end - site at http://www.wayfinder.ws/ - hosted on Digital Ocean

craft/config/license.key and craft/config/db.php are excluded via .gitignore

### To dev locally, create the aforementioned files as follows:

craft/config/license.key will need to be created, and should include a license key like so:

```
sodhfowhoehfhfkshdkjfhskhdfkhkkdsfkhh37t283468####
sodhfowhoehfhfkshdkjfhskhdfkhkkdsfkhh37t283468####
sodhfowhoehfhfkshdkjfhskhdfkhkkdsfkhh37t283468####
sodhfowhoehfhfkshdkjfhskhdfkhkkdsfkhh37t283468####
sodhfowhoehfhfkshdkjfhskhdfkhkkdsfkhh37t283468####

(random key - contact admin for our purchased license key value to use for deploy to production)
```

craft/config/db.php will need to be created, and should include your local connection info like so:

```
<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(

	// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
	'server' => 'localhost',

	// The database username to connect with.
	'user' => 'your_db_user',

	// The database password to connect with.
	'password' => 'your_db_pass',

	// The name of the database to select.
	'database' => 'craft_dev',

	// The prefix to use when naming tables. This can be no more than 5 characters.
	'tablePrefix' => '',

);
```

### Database Population
Grab latest MySQL export from production and import via PHPMyAdmin on your local dev machine.

### Editing Content
[See Docs] (/docs/content.md)

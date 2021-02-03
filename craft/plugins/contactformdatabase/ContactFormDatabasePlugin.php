<?php
namespace Craft;

class ContactFormDatabasePlugin extends BasePlugin
{
	function getName()
	{
		return Craft::t('Contact Form Database');
	}

	function getVersion()
	{
		return '1.0';
	}

	function getDeveloper()
	{
		return 'Wayfinder';
	}

	function getDeveloperUrl()
	{
		return 'http://wayfinder.ws';
	}

	protected function defineSettings()
	{
		return array(
			'toEmail'          => array(AttributeType::String, 'required' => true),
			'prependSender'    => AttributeType::String,
			'prependSubject'   => AttributeType::String,
			'allowAttachments' => AttributeType::Bool,
			'saveToDatabase'   => AttributeType::Bool,
			'honeypotField'    => AttributeType::String,
		);
	}

	public function getSettingsHtml()
	{
		return craft()->templates->render('contactformdatabase/_settings', array(
			'settings' => $this->getSettings()
		));
	}

	public function hasCpSection()
    {
        return true;
    }

	public function registerCpRoutes()
    {
        return array(
            'contactformdatabase/(?P<submissionId>\d+)' => 'contactformdatabase/_edit',
       );
    }
}

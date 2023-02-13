export default async function ({ addon, global, console }) {

  const accountSettings = addon.tab.waitForElement(".account-nav .dropdown > li:nth-child(3), ul.user-nav > li:nth-child(3), \
  [class*='menu-bar_account-info-group_'] [class*='menu_menu_'] > [class*='menu_menu-item_']:nth-child(3)", {
	  markAsSeen: false,
  }); 
  accountSettings.textContent = addon.settings.get("titleCase") === true ? "Account SettingS" : "Account settingS" 
  
  // if possible, check whether account-settings-capitalizer addon is enabled (instead of adding a new setting)
}

/*	**************************************************************************
	*   @preserve
	*   VistaPanel Add-on
	*   Script Name: "Change Password" Link and Text Changer
	*   Author: AA22Dev & Wybe Network
	*   Author URL: https://aa22.dev
	*   Version: 1.0
	*   Github Project URL: https://github.com/WybeNetwork/VistaPanel-Customizations
	*   Official Website URL: https://wybenetwork.com
	*   This file is licensed under MIT Attribution
	*   Modified at 02 November 2018 by PlanetCloud
	************************************************************************** 
*/
var n = document.getElementById("lnkUserPrefChangePwd");
n.setAttribute("href", change_password_link);
n.innerHTML = change_password_text;
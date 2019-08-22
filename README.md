# Office365 OWA for Franz

This is yet another Office365 [Outlook Web Access](https://outlook.office365.com/owa) recipe for [Franz](https://meetfranz.com).

However, this one actually has a working unread count as of 2019-08-21.

Note: this may be a bit CPU hungry (or it may be that having 8 recipes going simultaneously makes it look that way). Javascript is not my first calling, so this may have been implemented sub-optimally.

* Direct message count includes all folders except 'Deleted Items' and 'Junk Mail'.

## Installation

To install a new recipe:

1. Open the Franz `recipes` directory on your machine (create the `dev` directory if it doesn't exist):
* Mac: `~/Library/Application Support/Franz/recipes/dev/`
* Linux: `~/.config/Franz/recipes/dev/`
* Windows: `%appdata%/Franz/recipes/dev/`
2. Clone or copy the contents of this repo to a directory named `franz-recipe-owa` in the `dev` folder.
3. Reload Franz.
4. Add a new service. Click the "Development" button under available services to see the recipes added in `.../recipes/dev/`.

## References
* [Franz Integration Documentation](https://github.com/meetfranz/plugins/tree/master/docs)

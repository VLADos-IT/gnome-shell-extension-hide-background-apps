UUID = hide-background-apps@VLADos-IT.github.com
ZIP  = $(UUID).shell-extension.zip

zip:
	rm -f $(ZIP)
	zip -r $(ZIP) extension.js metadata.json LICENSE

.PHONY: zip

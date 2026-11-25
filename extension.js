import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class HideBackgroundAppsExtension extends Extension {
    enable() {
        this._items = Main.panel.statusArea.quickSettings._backgroundApps?.quickSettingsItems ?? [];

        for (const item of this._items) {
            item.connectObject('notify::visible', () => item.hide(), this);
            item.hide();
        }
    }

    disable() {
        for (const item of this._items ?? [])
            item.disconnectObject(this);

        this._items = null;
    }
}

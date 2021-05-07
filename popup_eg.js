let egPopup;

// Open the popup when we enter a given zone
egPopup = WA.onEnterZone('popupEgZone', () => {
    WA.openPopup("popup_eg_under_construction", 'Top stages of NFG are under Construction!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);

// Close the popup when we leave the zone.
WA.onLeaveZone('popupEgZone', () => {
    helloWorldPopup.close();
});
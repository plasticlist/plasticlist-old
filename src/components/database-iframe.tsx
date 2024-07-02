import React from 'react';

export function DatabaseIframe() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://docs.google.com/spreadsheets/d/1SOT8yUME4xgS7B6BwUeukNeBb5M9PxsRxHxPYOokjk0/edit?usp=sharing&rm=minimal&embedded=true&widget=true&chrome=false&headers=false"
        className="w-full h-full border border-gray-200"
        title="Embedded Google Sheet"
      />
    </div>
  );
}
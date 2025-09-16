import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// World map geo data
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Mock spend data
const spendData = { "IND": 100000 };

export const GeoMap = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Storefronts</h3>
      <ComposableMap projectionConfig={{ scale: 140 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const hasData = spendData[geo.properties.ISO_A3];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={hasData ? "#FF8C00" : "#E5E7EB"}
                  stroke="#FFFFFF"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#FDBA74" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {/* You can add the spend slider component here */}
    </div>
  );
};
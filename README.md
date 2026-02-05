# Clock of Clocks

A kinetic digital clock display where each digit is constructed from a grid of 24 individual analog clocks. The hands of the micro-clocks rotate to form the shape of the numbers (0-9) dynamically.

## Implementation Details

- **Framework:** React + Vite
- **Styling:** Pure CSS (Grid/Flexbox) with OKLCH color space

### Logic:

- **AnalogClock:** Base unit rendering two hands.
- **Digit:** A 6x4 grid of base units forming a single number.
- **App:** Main controller syncing time state with the grid.

## Setup

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/clock-of-clocks.git
cd clock-of-clocks
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

## Pattern Logic

The project uses a mapped coordinate system where every digit (0-9) is an array of 24 characters. Each character corresponds to a specific angle configuration for the clock hands (e.g., "┌" sets hands to 0° and 90°).

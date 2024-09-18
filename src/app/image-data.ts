// Create objects that contain different variants
export const GAME_OPTIONS = [
  {
    // Flower unfilled nocircle
    id: 1,
    images: [
      'flower-filled-circle.png',
      'leaf-filled-nocirle.png',
      'leaf-filled-circle.png',
      'flower-unfiled-nocircle.png',
    ],
    winner: 3,
  },
  {
    // Leaf filled nocircle
    id: 2,
    images: [
      'flower-unfilled-circle.png',
      'leaf-filled-nocirle.png',
      'leaf-filled-circle.png',
      'flower-unfiled-circle.png',
    ],
    winner: 1,
  },
  {
    // flower filled circle
    id: 3,
    images: [
      'flower-filled-circle.png',
      'leaf-filled-nocirle.png',
      'leaf-unfilled-circle.png',
      'leaf-unfiled-nocircle.png',
    ],
    winner: 3,
  },
];

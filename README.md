# Weird Hobby Picker 🎲

A fun, beautiful, animated single-page web app that randomly suggests weird hobbies from a database of **2000+ unique hobbies**!

## 🎯 Features

- **2000+ Weird Hobbies**: Carefully curated list of unusual and interesting hobbies
- **Beautiful UI**: Pastel gradients, smooth animations, and emoji-rich design
- **Confetti Animation**: Celebratory confetti when you discover a new hobby
- **Toast Notifications**: Friendly bottom-right notifications
- **Hobby Cards**: Each hobby includes:
  - Fun emoji 🎨
  - Engaging description
  - Affiliate link to Amazon for supplies
- **Mobile Responsive**: Works perfectly on all devices
- **Ad Placeholders**: Non-intrusive ad boxes (top and bottom)
- **100% Static**: No backend required, deploys anywhere

## 🚀 Deploy to Vercel in 1 Step

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Manual Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The app will be exported as static files
```

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy!

**That's it!** Your Weird Hobby Picker is live! ✨

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Static Export** (no backend needed)

## 🎨 Project Structure

```
weird-hobby-picker/
├── app/
│   ├── components/
│   │   ├── HobbyCard.tsx      # Main hobby display card
│   │   ├── Toast.tsx           # Bottom-right notifications
│   │   ├── Confetti.tsx        # Celebration animation
│   │   └── AdBox.tsx           # Ad placeholder components
│   ├── page.tsx                # Main page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── public/
│   └── hobbies.json            # 2000+ hobbies database
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎲 How It Works

1. Click the "🎉 Pick a Hobby" button
2. A random hobby is selected from the 2000+ database
3. Confetti animation plays
4. Hobby card animates in with:
   - Big emoji
   - Hobby name
   - Fun description
   - "Explore →" button (affiliate link)
   - "Try another hobby" link
5. Toast notification appears: "You unlocked a new hobby!"

## 🌈 Customization

### Update Hobbies

Edit `/public/hobbies.json` to add/modify hobbies:

```json
{
  "id": 2001,
  "name": "Your Hobby Name",
  "emoji": "🎯",
  "shortDesc": "Description of the hobby in 1-2 sentences.",
  "affiliateLink": "https://www.amazon.com/s?k=hobby+supplies"
}
```

### Change Colors

Edit `tailwind.config.js` or component className props to change the gradient colors, animations, and styling.

### Modify Animations

Components use Tailwind's animation classes. Check `tailwind.config.js` for custom animations like:
- `animate-bounce-in`
- `animate-slide-up`
- `animate-confetti`

## 📝 License

MIT License - feel free to use this project however you'd like!

## 💡 Credits

Built with ❤️ for the curious minds who love discovering new hobbies!

---

## 🎉 Ready to Discover Weird Hobbies?

Deploy now and start exploring! From Extreme Ironing to Competitive Duck Herding to Underwater Basket Weaving, there's something weird for everyone! 🦆🧺🏔️

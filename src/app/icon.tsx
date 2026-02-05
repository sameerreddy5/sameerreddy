import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                }}
            >
                {/* Profile Image (Masked to Circle) */}
                <img
                    src="https://picasso.cosmofeed.com/picture-profile.s3-ap-south-1.amazonaws.com/my_image1770277973-2026-05-02-07-52-54.png?w=600&&q=100"
                    alt="Icon"
                    width="32"
                    height="32"
                    style={{
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    );
}

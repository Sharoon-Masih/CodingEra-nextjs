/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"creazilla-store.fra1.digitaloceanspaces.com"
            },
            {
                protocol:"https",
                hostname:"i.giphy.com"
            }
        ]
    }
};

export default nextConfig;

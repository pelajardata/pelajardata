module.exports = {
    apps: [
        {
	    name: "pelajardata", // ubah sesuai nama aplikasi yang dibuat
            script: "npx",
            // sesuaikan port yang telah diubah
            args: "serve -s -l 64046 dist",
            
            interpreter: "none",
            watch: true,
            merge_logs: true,
            env: {
                "NODE_ENV": "production",        
            }
        }
    ]
}

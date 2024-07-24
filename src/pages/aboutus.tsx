import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MyComponent from "@/components/page/aboutus/MyComponent";
import { Grid } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUS() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MyComponent />
          </Grid>
        </Grid>
      </main>
    </>
  );
}

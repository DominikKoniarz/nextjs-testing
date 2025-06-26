import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex h-full w-full items-center justify-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        type="button"
                        data-testid="dialog-trigger"
                        className="cursor-pointer"
                    >
                        Open
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            {/* <Link href="/404" data-testid="redirect-link">
                Redirect to 404
            </Link> */}
        </main>
    );
}
